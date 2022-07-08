import { CreateGuildParams, guild } from "@guildxyz/sdk";
import { useMutation } from "react-query";
import { useAccount, useSigner } from "wagmi";

export interface IUseCreateGuild extends CreateGuildParams {}

export const useCreateGuild = ({
  name,
  roles,
  description,
  imageUrl,
  showMembers,
  theme,
}: IUseCreateGuild) => {
  const { address } = useAccount();
  const { data: signer } = useSigner();

  return useMutation(
    [
      "create-guild",
      {
        account: address,
        signer,
        name,
        roles,
        description,
        imageUrl,
        showMembers,
        theme,
      },
    ],
    async () => {
      if (!address || !signer) {
        throw "NOT_CONNECTED: Not connected to web3 wallet.";
      }

      return guild.create(address!, signer!.signMessage!, {
        name,
        roles,
        description,
        imageUrl,
        showMembers,
        theme,
      });
    }
  );
};
