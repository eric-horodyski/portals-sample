//
//  WebAppCard.swift
//  Jobsync
//
//  Created by Eric Horodyski on 12/11/23.
//

import SwiftUI

struct WebAppCard: View {
    let app: WebAppMetadata
    
    init(_ app: WebAppMetadata) {
        self.app = app
    }
    
    var body: some View {
        HStack {
            Image(app.name)
                .resizable()
                .scaledToFit()
                .frame(width: 48, height: 48)
                .padding(8)
                .foregroundColor(.white)
                .background(.jsPrimary)
                .cornerRadius(8)
            VStack(alignment: .leading) {
                Text(app.displayName)
                    .font(.title2)
                    .fontWeight(.bold)
                    .foregroundColor(.jsNeutralText)
                    .padding(.bottom, 1)
                Text(app.description)
                    .foregroundColor(.jsNeutralText)
                    .font(.caption)
            }
            Spacer()
        }
        .themedCard()
    }
}

#Preview {
    WebAppCard(WebApps.metadata[0])
        .padding()
        .themedBackground()
}
