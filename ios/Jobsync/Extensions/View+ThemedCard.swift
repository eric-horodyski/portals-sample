//
//  LoginCard.swift
//  Jobsync
//
//  Created by Eric Horodyski on 12/15/23.
//

import SwiftUI

struct ThemedCardView<Content: View>: View {
  let content: Content
  
  init(@ViewBuilder content: () -> Content) {
    self.content = content()
  }
  
  var body: some View {
    content
      .padding()
      .background(.white)
      .cornerRadius(8)
      .overlay(
        RoundedRectangle(cornerRadius: 8)
            .stroke(.jsNeutralBorder, lineWidth: 1)
      )
  }
}

struct ThemedCardModifier: ViewModifier {
  func body(content: Content) -> some View {
    ThemedCardView {
      content
    }
  }
}

extension View {
  func themedCard() -> some View {
    self.modifier(ThemedCardModifier())
  }
}
