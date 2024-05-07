package io.ionic.cs.portals.Jobsync.portals

import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import io.ionic.cs.portals.Jobsync.network.AnalyticsBody
import io.ionic.cs.portals.Jobsync.network.AnalyticsResult
import io.ionic.cs.portals.Jobsync.network.ApiClient
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

@CapacitorPlugin(name="Analytics")
class AnalyticsPlugin: Plugin() {
    @PluginMethod()
    fun logAction(call: PluginCall) {
        val action = call.getString("action")
        if (action != null) {
            val params = call.getObject("params")?.toString() ?: ""

            val input = AnalyticsBody(action = action, screen = null, params = params, platform = "android")
            logEvent(input) {
                if (it) call.resolve()
                else call.reject("Something went wrong")
            }

        } else call.reject("Input option 'action' must be provided.")

    }

    @PluginMethod()
    fun logScreen(call: PluginCall) {
        val screen = call.getString("screen")
        if (screen != null) {
            val params = call.getObject("params")?.toString() ?: ""

            val input = AnalyticsBody(action = null, screen = screen, params = params, platform = "android")
            logEvent(input) {
                if (it) call.resolve()
                else call.reject("Something went wrong")
            }

        } else call.reject("Input option 'action' must be provided.")
    }

    private fun logEvent(input: AnalyticsBody, completion: (Boolean) -> Unit) {
        ApiClient.apiService.analytics(input).enqueue(object: Callback<AnalyticsResult> {
            override fun onResponse(apiCall: Call<AnalyticsResult>, response: Response<AnalyticsResult>) {
                val body = response.body()
                body?.success?.let {
                    completion(it)
                } ?: completion(false)
            }

            override fun onFailure(apiCall: Call<AnalyticsResult>, t: Throwable) {
                completion(false)
            }
        })
    }
}