//
//  View+ThemedBackground.swift
//  Jobsync
//
//  Created by Eric Horodyski on 12/15/23.
//

import SwiftUI

struct ThemedBackgroundView<Content: View>: View {
    let content: Content
    
    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }
    
    var body: some View {
        ZStack {
            Color.jsNeutralSoft.ignoresSafeArea()
            content
        }
    }
}

struct ThemedBackgroundModifier: ViewModifier {
    func body(content: Content) -> some View {
        ThemedBackgroundView {
            content
        }
    }
}

extension View {
    func themedBackground() -> some View {
        self.modifier(ThemedBackgroundModifier())
    }
}
