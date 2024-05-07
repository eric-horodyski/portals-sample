//
//  CredentialManager.swift
//  Jobsync
//
//  Created by Eric Horodyski on 12/13/23.
//

import Foundation

struct Credentials: Decodable {
  var accessToken: String
  var refreshToken: String
  
  private enum CodingKeys: String, CodingKey {
    case accessToken = "access_token"
    case refreshToken = "refresh_token"
  }
}

struct LoginInput: Encodable {
  var username: String
  var password: String
}

@MainActor class CredentialsManager: ObservableObject {
    @Published var credentials: Credentials? = nil
    @Published var status: RequestStatus = .success
    
    private let http: NetworkManager
    
    init(http: NetworkManager) {
        self.http = http
    }
    
    func login (_ username: String, with password: String) async {
        let input = LoginInput(username: username, password: password)
        self.status = .loading
        
        do {
            let credentials = try await http.post("/auth", input: input, output: Credentials.self).get()
            self.credentials = credentials
            self.status = .success
        } catch {
            /* In a production application, a failure scenario would be handled properly.
               This demo does not use an actual auth backend; setting the credentials
               manaually will allow the app to continue normal operation.
            */
            self.credentials = Credentials(
                accessToken: "8f633ea6-de27-4110-96cf-bc10fa3a0b86",
                refreshToken: "da5ca0ea-5831-4373-a298-879dfa5a6fcb"
            )
        }
    }
}

extension CredentialsManager {
    static let preview: CredentialsManager = {
        let credentialsManager = CredentialsManager(http: NetworkManager())
        let credentials = Credentials(
            accessToken: "8f633ea6-de27-4110-96cf-bc10fa3a0b86",
            refreshToken: "da5ca0ea-5831-4373-a298-879dfa5a6fcb"
        )
        credentialsManager.credentials = credentials
        return credentialsManager
    }()
}
