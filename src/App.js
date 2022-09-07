import "./styles.css";
import { TextBox } from "./textbox";

export default function App() {
  // use this content to emule when we have a 6 lines or less
  const smallContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat accumsan luctus. Vestibulum vitae lacinia orci. Donec at elit sed diam consequat sollicitudin. Cras in quam sed nunc finibus tincidunt tincidunt quis odio. Fusce tincidunt enim purus, a tincidunt nunc.`;
  //use this content when we have more than 6 lines
  const largeContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat accumsan luctus. Vestibulum vitae lacinia orci. Donec at elit sed diam consequat sollicitudin. Cras in quam sed nunc finibus tincidunt tincidunt quis odio. Fusce tincidunt enim purus, a tincidunt nunc euismod eu. In pulvinar elit nec mattis posuere. Quisque tellus turpis, auctor eget pretium at, ultricies nec ante. Praesent tincidunt tortor vel volutpat venenatis. Proin eget venenatis tellus. Cras laoreet euismod pellentesque. Praesent ut elementum magna. Curabitur sed vehicula diam. Nulla in dui vel erat ultricies varius. Maecenas ut felis ex. Pellentesque bibendum diam id lorem euismod feugiat.

  Nullam rhoncus venenatis dui, quis pulvinar dui luctus sit amet. Mauris libero elit, feugiat et convallis non, placerat quis turpis. Nunc pulvinar velit vel maximus interdum. Vestibulum tempor sollicitudin eros, vitae tincidunt arcu commodo non. Mauris at urna et quam hendrerit lacinia. Sed a iaculis erat, in mattis ipsum. Morbi arcu augue, ultrices sit amet risus nec, ornare faucibus tellus. Aliquam aliquam lorem dui. Morbi dignissim elementum augue quis venenatis. Aenean at fringilla tortor. Nullam non sapien non mauris sagittis vestibulum ut vel quam.`;
  return (
    <>
      <TextBox content={smallContent} min={6} max={15} opened={false} />
    </>
  );
}
