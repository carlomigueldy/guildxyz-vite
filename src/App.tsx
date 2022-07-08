import { useConnect } from "wagmi";
import { useCreateGuild } from "./hooks";

function App() {
  const {
    data: connectData,
    connectAsync,
    connectors,
    isLoading: connectLoading,
  } = useConnect();
  const [metamask] = connectors;
  const {
    data: createGuildData,
    isLoading: createGuildLoading,
    mutateAsync: createGuild,
  } = useCreateGuild({ name: "AW Test Guild", roles: [] });
  const isConnected = !!connectData;

  return (
    <>
      <h1>{isConnected ? "web3 enabled" : "not connected"}</h1>

      <button onClick={() => connectAsync({ connector: metamask })}>
        {connectLoading ? "connecting wallet..." : "Connect Wallet"}
      </button>

      <button onClick={() => createGuild()}>
        {createGuildLoading ? "..." : "Create Guild"}
      </button>
    </>
  );
}

export default App;
