import { DefaultSVG } from "@assets/icons/books/bookIcons/Default";
import { MoonSVG } from "@assets/icons/books/bookIcons/Moon";
import { StarSVG } from "@assets/icons/books/bookIcons/Star";
import { BookIconEnum } from "@pages/Books/components/Book/components/BookIcon/types";

export function getIcon(icon: string) {
  switch (icon) {
    case BookIconEnum.moon:
      return <MoonSVG />;
    case BookIconEnum.star:
      return <StarSVG />;
    // case BookIconEnum.flower:
    //   return <FlowerSVG />;
    // case BookIconEnum.clover:
    //   return <CloverSVG />;
    // case BookIconEnum.plant:
    //   return <PlantSVG />;
    // case BookIconEnum.loveheart:
    //   return <LoveheartSVG />;
    // case BookIconEnum.cherry:
    //   return <CherrySVG />;
    // case BookIconEnum.feather:
    //   return <FeatherSVG />;
    // case BookIconEnum.cloud:
    //   return <CloudSVG />;
    // case BookIconEnum.spade:
    //   return <SpadeSVG />;
    // case BookIconEnum.diamond:
    //   return <DiamondSVG />;
    // case BookIconEnum.club:
    //   return <ClubSVG />;
    // case BookIconEnum.heart:
    //   return <HeartSVG />;
    // case BookIconEnum.crown:
    //   return <CrownSVG />;
    // case BookIconEnum.fire:
    //   return <FireSVG />;
    // case BookIconEnum.bluefire:
    //   return <BluefireSVG />;
    // case BookIconEnum.leaf:
    //   return <LeafSVG />;
    // case BookIconEnum.paint:
    //   return <PaintSVG />;
    // case BookIconEnum.coffee:
    //   return <CoffeeSVG />;
    // case BookIconEnum.bird:
    //   return <BirdSVG />;
    // case BookIconEnum.masks:
    //   return <MasksSVG />;
    // case BookIconEnum.wand:
    //   return <WandSVG />;
    // case BookIconEnum.orb:
    //   return <OrbSVG />;
    default:
      return <DefaultSVG />;
  }
}
