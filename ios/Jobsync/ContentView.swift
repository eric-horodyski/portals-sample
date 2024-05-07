//
//  ContentView.swift
//  Jobsync
//
//  Created by Eric Horodyski on 12/5/23.
//

import SwiftUI

struct ContentView: View {
    @StateObject var credentialsManager = CredentialsManager(http: NetworkManager())
    
    var body: some View {
        Group {
            if self.credentialsManager.credentials == nil {
                LoginView()
            } else {
                DashboardView()
            }
        }.environmentObject(credentialsManager)
    }
}

#Preview {
    ContentView()
}
