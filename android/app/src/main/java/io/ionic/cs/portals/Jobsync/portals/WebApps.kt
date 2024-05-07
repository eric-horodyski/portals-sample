package io.ionic.cs.portals.Jobsync.portals

import java.util.Locale

data class WebAppMetadata(val name: String, val description: String) {
    val displayName get() = name.replace('_', ' ').split(" ").map {
        it.replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
    }.joinToString(" ")
}

val webApps: List<WebAppMetadata> = listOf(
    WebAppMetadata("expenses", "Submit expenses for business purchases."),
    WebAppMetadata("tasks", "Track tasks for transparent project updates."),
    WebAppMetadata("time_tracking", "Stay on schedule by tracking time spent.")
)