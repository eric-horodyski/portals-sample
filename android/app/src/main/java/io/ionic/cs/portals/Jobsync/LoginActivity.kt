package io.ionic.cs.portals.Jobsync

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.OutlinedCard
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import io.ionic.cs.portals.Jobsync.network.ApiClient
import io.ionic.cs.portals.Jobsync.network.Credentials
import io.ionic.cs.portals.Jobsync.network.LoginBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LoginScreen(navHostController: NavHostController) {
    var username by remember { mutableStateOf("test@jobsync.com") }
    var password by remember { mutableStateOf("P@ssword123") }

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        OutlinedCard(modifier = Modifier.padding(10.dp)) {
            Column(modifier = Modifier.padding(10.dp)) {
                Image(
                    painter = painterResource(id = R.drawable.debug),
                    contentDescription = "Hi",
                    modifier = Modifier
                        .size(150.dp)
                        .padding(10.dp)
                        .align(Alignment.CenterHorizontally)
                )
                OutlinedTextField(
                    value = username,
                    onValueChange = { username = it },
                    label = { Text("Username") },
                    modifier = Modifier.fillMaxWidth()
                )
                OutlinedTextField(
                    value = password,
                    onValueChange = { password = it },
                    label = { Text("Password") },
                    visualTransformation = PasswordVisualTransformation(),
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
                    modifier = Modifier.fillMaxWidth()
                )
                Button(
                    onClick = { login(username, password) {
                        navHostController.navigate("Dashboard")
                    } },
                    colors = ButtonDefaults.buttonColors(
                        containerColor = Color.hsl(219.57f, .5433f, .498f)
                    ),
                    modifier = Modifier.fillMaxWidth()
                        .padding(top = 14.dp)
                ) {
                    Text("Login", fontWeight = FontWeight.Bold)
                }
            }
        }
    }
}

fun login(username: String, password: String, onSuccess: (Credentials) -> Unit) {
    val call = ApiClient.apiService.login(LoginBody(username,password))
    call.enqueue(object: Callback<Credentials> {
        override fun onResponse(call: Call<Credentials>, response: Response<Credentials>) {
            val body = response.body()
            body?.let {
                ApiClient.credentials = it
                onSuccess(it)
            }
        }

        override fun onFailure(call: Call<Credentials>, t: Throwable) {
            println(t.message)
        }

    })
}