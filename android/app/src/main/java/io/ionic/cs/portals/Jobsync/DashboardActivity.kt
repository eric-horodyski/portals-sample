package io.ionic.cs.portals.Jobsync

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.LargeTopAppBar
import androidx.compose.material3.OutlinedCard
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.material3.rememberTopAppBarState
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import io.ionic.cs.portals.Jobsync.portals.WebAppMetadata
import io.ionic.cs.portals.Jobsync.portals.webApps

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DashboardScreen(navHostController: NavHostController) {
    val scrollBehavior = TopAppBarDefaults.exitUntilCollapsedScrollBehavior(rememberTopAppBarState())
    Scaffold(
        modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection),
        topBar = {
            LargeTopAppBar(
                colors = TopAppBarDefaults.largeTopAppBarColors(
                    containerColor = Color.White,
                    titleContentColor = Color.Black,
                ),
                title = {
                    Text(
                        "Dashboard",
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                },
                scrollBehavior = scrollBehavior
            )
        },
    ) { innerPadding ->
        Dashboard(innerPadding, navHostController)
    }
}

@Composable
fun Dashboard(innerPadding: PaddingValues, navHostController: NavHostController) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize(),
        contentPadding = innerPadding,
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        items(webApps.size) { index ->
            WebAppCard(webAppMetadata = webApps[index]) {
                navHostController.navigate("App/$index")
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun WebAppCard(webAppMetadata: WebAppMetadata, onClick: () -> Unit) {
    val context = LocalContext.current
    val image = context.resources.getIdentifier(webAppMetadata.name, "drawable", context.packageName)

    OutlinedCard(
        onClick = { onClick() },
        Modifier.fillMaxWidth()
            .padding(horizontal = 8.dp)
    ) {
        Row() {
            Image(
                painter = painterResource(id = image),
                contentDescription = "Hi",
                modifier = Modifier
                    .padding(10.dp)
                    .size(75.dp)
                    .padding(5.dp)
                    .background(
                        color = Color.hsl(219.57f, .5433f, .498f),
                        shape = RoundedCornerShape(10.dp)
                    )
                    .padding(10.dp)
            )
            Column(Modifier.align(Alignment.CenterVertically)) {
                Text(
                    text = webAppMetadata.displayName,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = webAppMetadata.description,
                    fontSize = 12.sp
                )
            }
        }
    }

}