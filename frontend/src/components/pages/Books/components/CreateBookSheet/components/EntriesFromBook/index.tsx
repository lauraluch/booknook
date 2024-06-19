// External Libraries
import React from "react";

// Components

// Styles
import { Container, ListContainer, TitleAndDescription } from "./styles";
import { IListEntry } from "./types";
import { ListEntry } from "./components/ListEntry";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";

interface Props {
  // Props
}

export const EntriesFromBook: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const mockEntries: IListEntry[] = [
    {
      title: "Aniversário",
      lastModifiedAt: "2024-04-17",
    },
    {
      title: "Te amo Luiz",
      lastModifiedAt: "2024-04-21",
    },
    {
      title: "Aniversário",
      lastModifiedAt: "2024-04-17",
    },
    {
      title: "Te amo Luiz",
      lastModifiedAt: "2024-04-21",
    },
  ];

  return (
    <Container>
      <TitleAndDescription>
        <Typography variant="h6">{"Anotações"}</Typography>

        <Typography variant="b2" color={theme.colors.text.secondary}>
          {"Clique em uma anotação para ir para os detalhes."}
        </Typography>
      </TitleAndDescription>

      <ListContainer>
        {mockEntries.map((entry) => (
          <ListEntry entry={entry} />
        ))}
      </ListContainer>
    </Container>
  );
};
