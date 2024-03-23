export function loadRemoteEntry(remoteUrl){
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = remoteUrl
        script.async = true;
        script.onload = () => {
            console.log(`Remote entry ${remoteUrl} loaded`)
            resolve();
        }
        script.onerror = reject;
        document.head.appendChild(script)
    })
}