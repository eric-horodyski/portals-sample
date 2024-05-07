package io.ionic.cs.portals.Jobsync

import android.app.Application
import io.ionic.portals.PortalManager

class Jobsync: Application() {
    override fun onCreate(): Unit {
        super.onCreate()
        PortalManager.register("Portals Key")
    }
}