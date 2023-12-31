# 介绍

- UI库 https://www.react-native-material.com/
- 格式化 eslint+prettier

## 启动

- yarn dev:rn 安卓

## Preview

| Android                                                                                | iOS                                                                                    | Web                                                                                 | Mini Program                                                                        |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| ![](https://pic3.58cdn.com.cn/nowater/fangfe/n_v295dd481b6b2f446592350e3187716d03.png) | ![](https://pic1.58cdn.com.cn/nowater/fangfe/n_v224532e5560314106b6ab32b0a1534a9d.png) | ![](https://pic5.58cdn.com.cn/nowater/frs/n_v2d585527f52e640679cdd37123a418fe3.png) | ![](https://pic3.58cdn.com.cn/nowater/frs/n_v23ec2613515c6458aaa44f01d459cea8b.jpg) |
| https://github.com/wuba/taro-playground/releases                                       | https://apps.apple.com/cn/app/taro-playground/id1576830673                             | https://wuba.github.io/taro-playground/                                             | https://github.com/wuba/taro-playground                                             |

====
React Native Template for Taro
====

## requirement

0. taro: `@tarojs/cli@^3.5.0`
1. framework: 'react'

## quick start

### install react native library

> install peerDependencies of `@tarojs/taro-rn` `@tarojs/components-rn` and `@tarojs/router-rn`, it will also run `post-install`. please modify and run `upgradePeerdeps` script when you change taro version.
>
> **run this script after project inited.**

`yarn upgradePeerdeps`

### pod install

> run this script when you add new react native library or update react native library version.
>
> see [pod-install](https://www.npmjs.com/package/pod-install) for more infomation.

`yarn podInstall`

### start ios app

`yarn ios`

### start android app

`yarn android`

### start bundler

`yarn start`

### more infomations

0. [development process of taro react native](https://taro-docs.jd.com/taro/docs/react-native)
1. [github](https://github.com/NervJS/taro)

## release

### build ios bundle

`yarn build:rn --platform ios`

### build Android bundle

`yarn build:rn --platform android`

### release ios APP

see [publishing-to-app-store](https://reactnative.cn/docs/publishing-to-app-store) for details.

### release android apk

see [signed-apk-android](https://reactnative.cn/docs/signed-apk-android) for details.

## github workflows

> use github actions to build your apps. this template include basic github action config.

see [.github/workflows](.github/workflows) for details.

### events

we assemble debug and release product for both android and ios when you push or pull request on master branch by default. design your own workflows by modify [.github/workflows](.github/workflows) files.

see [events-that-trigger-workflows](https://docs.github.com/en/actions/reference/events-that-trigger-workflows)

### ios

#### configuration

Modify the following configuration items for package and publish your app.

> [.github/workflows/assemble_ios_debug.yml](.github/workflows/assemble_ios_debug.yml) > [.github/workflows/assemble_ios_release.yml](.github/workflows/assemble_ios_release.yml)

```yml
env:
  APP_ID: com.taro.demo # Application Product Bundle Identifier
  APP_NAME: Taro Demo # The Display Name of your app
  VERSION_NUMBER: 1.0.0 # Application version number
  BUILD_NUMBER: 1.0.0.0 # Application build number, used by release only.
  TEAM_ID: XXXXXXXXXX # Team ID, is used when upgrading project
  PROVISIONING_PROFILE_SPECIFIER: Product_profile # Provisioning profile name to use for code signing
  CODE_SIGN_IDENTITY: iPhone Distribution # Code signing identity type (iPhone Developer, iPhone Distribution)
  SIGNING_CERTIFICATE_P12_DATA: ${{secrets.RELEASE_SIGNING_CERTIFICATE_P12_DATA}}
  SIGNING_CERTIFICATE_PASSWORD: ${{secrets.RELEASE_SIGNING_CERTIFICATE_PASSWORD}}
  PROVISIONING_PROFILE_DATA: ${{secrets.RELEASE_PROVISIONING_PROFILE_DATA}}
  APP_STORE_CONNECT_USERNAME: ${{secrets.APP_STORE_CONNECT_USERNAME}} # This secret should be set to the Apple ID of your developer account, used by release only.
  APP_STORE_CONNECT_PASSWORD: ${{secrets.APP_STORE_CONNECT_PASSWORD}} # used by release only.
```

values like ${{secrets.xxxxx}} are manually generated and store in your github encrypted secrets.

##### SIGNING_CERTIFICATE_P12_DATA

`cat Certificates.p12 | base64 | pbcopy`

##### SIGNING_CERTIFICATE_PASSWORD

encryption password of your Personal Information Exchange (.p12)

##### PROVISIONING_PROFILE_DATA

`cat profile.mobileprovision | base64 | pbcopy`

##### APP_STORE_CONNECT_PASSWORD

This secret should be set to an application-specific password for your Apple ID account. Follow [these instructions](https://support.apple.com/en-us/HT204397) to create an application-specific password.

#### Read more

1. [deploy an ios app to testflight or the app store using github actions](https://betterprogramming.pub/deploy-an-ios-app-to-testflight-or-the-app-store-using-github-actions-c4d7082b1430)
2. [encrypted-secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)
3. [fastlane](https://docs.fastlane.tools/)

### android

#### configuration

Modify the following configuration items for package and publish your app.

> [.github/workflows/assemble_android_debug.yml](.github/workflows/assemble_android_debug.yml) > [.github/workflows/assemble_android_release.yml](.github/workflows/assemble_android_release.yml)

```yml
env:
  APP_ID: com.taro.demo # Application Product Bundle Identifier
  APP_NAME: Taro Demo # The Display Name of your app
  APP_ICON: ic_launcher # The Application icon of your app
  APP_ROUND_ICON: ic_launcher_round # The Application round icon of your app
  APP_ABI_FILTERS: armeabi-v7a, arm64-v8a # App abi filters
  VERSION_NAME: 1.0.0 # version name
  VERSION_CODE: 10 # version code
  KEYSTORE_FILE: debug.keystore # key store file
  KEYSTORE_PASSWORD: android # key store password
  KEYSTORE_KEY_ALIAS: androiddebugkey # key store key alias
  KEYSTORE_KEY_PASSWORD: android # key store key password
```

For the security of your app, please regenerate the .keystore file and store the password in your github encrypted secrets.

#### Read more

1. [app signing](https://developer.android.com/studio/publish/app-signing)
2. [encrypted-secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)

## links

0. [template source code](https://github.com/NervJS/taro-project-templates/tree/v3.1/react-native)
1. [sample project](https://github.com/wuba/taro-react-native/tree/playground)
