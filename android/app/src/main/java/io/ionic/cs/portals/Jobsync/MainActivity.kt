package io.ionic.cs.portals.Jobsync

import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import io.ionic.cs.portals.Jobsync.portals.WebAppView
import io.ionic.cs.portals.Jobsync.portals.webApps
import io.ionic.cs.portals.Jobsync.ui.theme.JobsyncTheme

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            val navController = rememberNavController()

            JobsyncTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = Color.hsl(216.0f, .33f, .97f)
                ) {
                    NavHost(navController = navController, startDestination = "Login"){
                        composable("Login"){
                            LoginScreen(navController)
                        }
                        composable("Dashboard"){
                            DashboardScreen(navController)
                        }
                        composable("App/{id}", arguments = listOf(navArgument("id"){
                            type = NavType.IntType
                        })){ backStackEntry ->
                            val portalId = backStackEntry.arguments?.getInt("id")
                            println(portalId)
                            portalId?.let { WebAppView(navController, webApps[it]) }
                        }
                    }
                }
            }
        }
    }
}