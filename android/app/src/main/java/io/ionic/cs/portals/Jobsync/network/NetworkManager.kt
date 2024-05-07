package io.ionic.cs.portals.Jobsync.network

import androidx.annotation.Keep
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Body
import retrofit2.http.Headers
import retrofit2.http.POST

@Keep
data class LoginBody(val username: String, val password: String)
@Keep
data class Credentials(val access_token: String, val refresh_token: String)

@Keep
data class AnalyticsBody(val action: String?, val screen: String?, val params: String?, val platform: String)

@Keep
data class AnalyticsResult(val success: Boolean)

interface ApiService {
    @POST("auth")
    @Headers("x-api-key: kRJoNgYv0z4jK8YyhhzJU94HEJCWPUeG1UzTRkAF")
    fun login(@Body() loginCredentials: LoginBody): Call<Credentials>

    @POST("analytics")
    @Headers("x-api-key: kRJoNgYv0z4jK8YyhhzJU94HEJCWPUeG1UzTRkAF")
    fun analytics(@Body() analyticsBody: AnalyticsBody): Call<AnalyticsResult>
}

object RetrofitClient {
    private const val BASE_URL = "https://88tkyz16e2.execute-api.us-east-2.amazonaws.com/v1/"

    val retrofit: Retrofit by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }
}

object ApiClient {
    public var credentials: Credentials? = null
    public val apiService: ApiService by lazy {
        RetrofitClient.retrofit.create(ApiService::class.java)
    }
}