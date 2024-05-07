//
//  DashboardView.swift
//  Jobsync
//
//  Created by Eric Horodyski on 12/8/23.
//

import SwiftUI

struct DashboardView: View {    
    var body: some View {
        NavigationStack {
            VStack {
                ForEach(WebApps.metadata, id: \.name) { webapp in
                    NavigationLink(value: webapp) {
                        WebAppCard(webapp)
                            .padding(.horizontal, 10)
                            .padding(.vertical, 1)
                    }

                }
                Spacer()
            }
            .padding(.top, 30)
            .navigationTitle("Dashboard")
            .navigationDestination(for: WebAppMetadata.self, destination: { webapp in
                WebAppView(metadata: webapp)
            })
            .toolbarBackground(Color.white, for: .navigationBar)
            .toolbarBackground(.visible, for: .navigationBar)
            .themedBackground()
        }
    }
}

#Preview {
    DashboardView()
        .environmentObject(CredentialsManager.preview)
}
