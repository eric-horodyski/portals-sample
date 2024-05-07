# Build Instructions

To try our Ionic Portals demo, both iOS and Android applications require you to input a Portals registration key. You may get a key by going to <a href="https://ionic.io/register-portals" target="_blank">ionic.io/register-portals</a>. 

Follow the instructions below to add your key to each platform demo application. A key is not required to run web packages.

## Web

In order to install and build from this repo, you will need <a href="https://pnpm.io" target="_blank">pnpm</a>.

All web packages (micro frontends and shared libraries) reside within the `/web` subfolder. To install all dependencies and link shared libraries with micro frontends, run the following commands:

```bash
cd ./web
pnpm install
```

### Running a Package

All micro frontend web applications contain a `dev` script that runs the web application in the development server so it can be accessed via the web browser.

Use the `--filter` option to specific a package. For example, if you are interested in running `expenses` use the following command: `pnpm run --filter="expenses" dev`. 

The following commands will run their respective packages:

- `pnpm run --filter="expenses" dev`
- `pnpm run --filter="tasks" dev`
- `pnpm run --filter="time-tracking" dev`

Each micro frontend is set to run on a different port; you can run all three web applications at once. 

## iOS

Open the iOS project in Xcode:

```bash
cd ./ios/Jobsync
xed Jobsync.xcodeproj
```

Uncomment the following line in `JobsyncApp.swift` and replace `YOUR_KEY_HERE` with your key:

```swift
// Register Portals
PortalManager.register("YOUR_KEY_HERE")
```

Build and run the application.

## Android

Open the Android project located in `/android/jobsync` in Android Studio.

Uncomment the following line in `JobsyncApp.kt` and replace `YOUR_KEY_HERE` with your key:

```kotlin
// Register Portals
PortalManager.register("YOUR_KEY_HERE")
```

Build and run the application.