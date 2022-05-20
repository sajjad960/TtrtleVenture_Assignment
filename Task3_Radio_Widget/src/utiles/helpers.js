export function modeChecker() {
    let hostAddress = '';
    // check mode on development or not
    process.env?.REACT_APP_MODE === 'development' ?
        hostAddress = process.env?.REACT_APP_LOCAL_HOST_URL : hostAddress = null;

    return hostAddress;
}