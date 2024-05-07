//
//  WebApps.swift
//  Jobsync
//
//  Created by Eric Horodyski on 12/11/23.
//

import Foundation

struct WebAppMetadata: Hashable {
    var name: String
    var description: String
        
    var displayName: String {
        self.name.replacingOccurrences(of: "-", with: " ").capitalized
    }
}

struct WebApps {
    static let metadata: [WebAppMetadata] = [
        WebAppMetadata(name: "expenses", description: "Submit expenses for business purchases."),
        WebAppMetadata(name: "tasks", description: "Track tasks for transparent project updates."),
        WebAppMetadata(name: "time-tracking", description: "Stay on schedule by tracking time spent.")
    ]
}
