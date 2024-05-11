declare module "superagent-promise" {
  import superagent from "superagent";

  function superagentPromise(
    sa: typeof superagent,
    promiseConstructor: typeof Promise
  ): any;

  export default superagentPromise;
}
