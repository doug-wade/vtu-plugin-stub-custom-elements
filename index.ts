const shadowRegistry = new Set();

console.log('replacing define...');
const originalDefine = customElements.define;
customElements.define = function (name, ...args) {
    console.log('registering component with name', name);
    shadowRegistry.add(name);
    originalDefine.apply(customElements, arguments);
};

export default (wrapper) => {
    wrapper.stubs = [];
    console.log('have shadowRegistry', shadowRegistry.entries());
    for (const [customElement] of shadowRegistry.entries()) {
        console.log('appending stub', customElement);
        wrapper.stubs.push(customElement);
    }
    return {};
}
