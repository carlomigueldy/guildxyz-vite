import { useCreateGuild } from "./hooks";

function App() {
  const {
    data: createGuildData,
    isLoading: createGuildLoading,
    mutateAsync: createGuild,
  } = useCreateGuild({ name: "AW Test Guild", roles: [] });

  return (
    <>
      <button onClick={() => createGuild()}>
        {createGuildLoading ? "..." : "Create Guild"}
      </button>
    </>
  );
}

export default App;
