import { isAsyncThunkAction, isFulfilled, isRejected } from "@reduxjs/toolkit";
import { notifications } from "@mantine/notifications";

export function notice(storeApi) {
    return next => action => {
        if (isAsyncThunkAction(action)) {
            let endpointName = action.meta.arg.endpointName;
            if (
                endpointName == "updateProfile" ||
                endpointName == "signin" ||
                endpointName == "addProject" ||
                endpointName == "updateProject" ||
                endpointName == "deleteProject"
            ) {
                if (isFulfilled(action)) {
                    notifications.show({
                        title: "Success",
                        message: action.payload.message
                    });
                    console.log(action)
                }
                if (isRejected(action)) {
                    notifications.show({
                        title: "Failure",
                        message: action.payload.data.message
                    });
                    console.log(action)
                }
            }
        }
        return next(action);
    };
}
