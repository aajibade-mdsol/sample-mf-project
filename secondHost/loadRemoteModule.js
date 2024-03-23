export async function loadRemoteModule(scope, module) {
    await __webpack_init_sharing__('default');
    const container = window[scope]
    await container.innerWidth(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module)
    const Module = factory()
    console.log('mod', Module)
    return Module
}