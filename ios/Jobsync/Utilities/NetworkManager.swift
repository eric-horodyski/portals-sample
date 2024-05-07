//
//  CredentialsManager.swift
//  Jobsync
//
//  Created by Eric Horodyski on 12/12/23.
//

import Alamofire
import Foundation

typealias NetworkError = AFError

enum RequestStatus {
    case loading, success, failure
}

class NetworkManager: ObservableObject {
    
    private let BASE_URL = "https://88tkyz16e2.execute-api.us-east-2.amazonaws.com/v1"
    private let X_API_KEY = "kRJoNgYv0z4jK8YyhhzJU94HEJCWPUeG1UzTRkAF"
    
    func delete<Output: Decodable>(_ url: String, output _: Output.Type, completion: @escaping (Result<Output, NetworkError>) -> Void) {
        AF.request(BASE_URL + url, method: .delete, interceptor: self).validate().responseDecodable(of: Output.self) { response in
            completion(response.result)
        }
    }
    
    func get<Output: Decodable>(_ url: String, output _: Output.Type, completion: @escaping (Result<Output, NetworkError>) -> Void) {
        AF.request(BASE_URL + url, interceptor: self).validate().responseDecodable(of: Output.self) { response in
            completion(response.result)
        }
    }
    
    func post<Input: Encodable, Output: Decodable>(_ url: String, input: Input, output _: Output.Type) async throws -> Result<Output, NetworkError> {
        let headers: HTTPHeaders = [.init(name: "Content-Type", value: "application/json")]
        let task = AF.request(BASE_URL + url, method: .post, parameters: input, encoder: .json, headers: headers, interceptor: self)
            .validate()
            .serializingDecodable(Output.self)
        return await task.result
    }
    
    func post<Input: Encodable, Output: Decodable>(_ url: String, input: Input, output _: Output.Type, completion: @escaping (Result<Output, NetworkError>) -> Void) {
        let headers: HTTPHeaders = [.init(name: "Content-Type", value: "application/json")]
        AF.request(BASE_URL + url, method: .post, parameters: input, encoder: .json, headers: headers, interceptor: self)
            .validate().responseDecodable(of: Output.self) { response in
                completion(response.result)
            }
    }
    
    func put<Input: Encodable, Output: Decodable>(_ url: String, input: Input, Output _: Output.Type, completion: @escaping (Result<Output, NetworkError>) -> Void) {
        let headers: HTTPHeaders = [.init(name: "Content-Type", value: "application/json")]
        AF.request(BASE_URL + url, method: .put, parameters: input, encoder: .json, headers: headers, interceptor: self)
            .validate().responseDecodable(of: Output.self) { response in
                completion(response.result)
            }
    }
    
}

extension NetworkManager: RequestInterceptor {
    func adapt(_ urlRequest: URLRequest, for _: Session, completion: @escaping (Result<URLRequest, Error>) -> Void) {
        var request = urlRequest
        request.setValue(X_API_KEY, forHTTPHeaderField: "x-api-key")
        completion(.success(request))
    }
}
