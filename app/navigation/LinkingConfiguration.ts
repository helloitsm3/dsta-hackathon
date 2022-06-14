/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";
import { RootStackParamList } from "../types";
import { LinkingOptions } from "@react-navigation/native";

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    Home: {
                        screens: {
                            HomeScreen: "home",
                        },
                    },
                    Alerts: {
                        screens: {
                            AlertsScreen: "alerts",
                        },
                    },
                    Profile: {
                        screens: {
                            ProfileScreen: "profile",
                        },
                    },
                },
            },
            Modal: "modal",
            NotFound: "*",

            Welcome: {
                screens: {
                    WelcomeScreen: "welcome",
                },
            },

            ORNS: {
                screens: {
                    ORNSScreen: "orns",
                },
            },

            SingpassLogin: {
                screens: {
                    SingpassLoginScreen: "singpassLogin",
                },
            },
        },
    },
};

export default linking;
