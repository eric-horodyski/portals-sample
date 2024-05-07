package io.ionic.portals.sample

import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import io.ionic.portals.PortalBuilder
import io.ionic.portals.PortalManager
import io.ionic.portals.PortalView
import io.ionic.portals.WebVitals
import io.ionic.portals.sample.ui.theme.SamplePortalTheme

class MainActivity : AppCompatActivity() {
  var firstContentfulPaint = mutableStateOf("Loading...")


  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    PortalManager.register(BuildConfig.portalsKey)
    setContent {
      SamplePortalTheme {
        Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
          SamplePortalView()
        }
      }
    }
  }
}

@Composable
fun SamplePortalView() {
  val firstContentfulPaint =  remember { mutableStateOf("Loading...") }
  val webVitals = WebVitals { _, metric, duration ->
    if(metric == WebVitals.Metric.FCP) { firstContentfulPaint.value = "$duration ms" }
  }
  val portal = PortalBuilder("debug")
    .setStartDir("react-starter")
    .addPluginInstance(webVitals)
    .create()
  Column(modifier = Modifier.fillMaxSize()) {
    AndroidView(factory = {
      PortalView(it, portal)
    }, modifier = Modifier.weight(4/5f))
    Box(modifier = Modifier.background(Color.DarkGray).fillMaxWidth()) {
      Text(text = "First Contentful Paint: ${firstContentfulPaint.value}", modifier = Modifier.padding(8.dp), color = Color.White)
    }
  }
}