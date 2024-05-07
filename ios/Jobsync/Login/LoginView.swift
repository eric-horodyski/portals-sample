//
//  LoginView.swift
//  Jobsync
//
//  Created by Eric Horodyski on 12/14/23.
//

import SwiftUI

struct LoginView: View {
    @State var username = "test@jobsync.com"
    @State var password = "P@ssword123"
    @EnvironmentObject var credentialsManager: CredentialsManager
    
    var body: some View {
        VStack {
            switch credentialsManager.status {
            case .loading:
                ProgressView()
            default:
                Image(.logo)
                    .resizable()
                    .scaledToFit()
                    .frame(height: 128)
                    .padding()
                    .padding(.bottom, 20)
                TextField("Username", text: $username)
                    .autocapitalization(.none)
                    .autocorrectionDisabled(true)
                Divider()
                    .padding(.bottom, 20)
                SecureField("Password", text: $password)
                    .autocorrectionDisabled(true)
                Divider()
                    .padding(.bottom, 20)
                Button(
                    action: {
                        performLogin()
                    },
                    label: {
                        Text("Login")
                            .frame(maxWidth: .infinity, maxHeight: 48)
                            .fontWeight(.bold)
                            .foregroundColor(.white)
                            .background(.jsPrimary)
                            .cornerRadius(8)
                    }
                )
            }
        }
        .themedCard()
        .padding()
        .themedBackground()
    }
    
    private func performLogin() {
        Task {
            let username = $username.wrappedValue
            let password = $password.wrappedValue
            await self.credentialsManager.login(username, with: password)
        }
    }
    
}

#Preview {
    LoginView()
        .environmentObject(CredentialsManager(http: NetworkManager()))
}
