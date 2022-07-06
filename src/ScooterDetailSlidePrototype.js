import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

// if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">
import "react-spring-bottom-sheet/dist/style.css";

export default function ScooterDetailSlidePrototype(props) {
  const [open, setOpen] = useState(false);

  function onDismiss() {
    setOpen(false);
  }

  function onOpen() {
    setOpen(props.open);
  }

  return (
    <>
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ minHeight }) => [500, minHeight]}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          excepturi ipsa dolores iste, quisquam possimus. Unde natus consectetur
          delectus ipsum animi, necessitatibus nam eligendi quos nemo in odio ea
          quis perferendis, magni ut dicta ab reprehenderit laborum, numquam
          aperiam possimus magnam impedit aliquam sapiente. Sed deserunt
          voluptas sequi cumque, veniam quidem sint magnam. Quod minima vel quam
          nemo, quos libero blanditiis, nihil cum aut facere voluptatibus
          aperiam, commodi eligendi architecto? Praesentium, molestiae? Odio
          dolorem nam quam fugit ipsam eos, ut voluptatem officiis voluptatibus
          nobis praesentium neque modi vel ea asperiores id amet placeat qui
          sapiente accusantium. Assumenda consequuntur vero nulla nobis
          blanditiis, ad vel ipsam reiciendis nihil! Voluptate itaque natus
          optio illum! Magni at aperiam provident obcaecati dolorem asperiores,
          nesciunt ratione harum quia aspernatur, architecto nulla possimus
          quasi? Quia quasi necessitatibus ab exercitationem cumque possimus
          adipisci porro inventore quod enim pariatur nam impedit maiores nisi,
          iusto libero nulla voluptas fugiat in velit dignissimos accusantium
          ipsam. Sit aperiam eligendi error quas magni nihil quis et deleniti
          similique, delectus blanditiis veniam soluta nemo quasi incidunt
          accusamus atque quae fuga. Et reiciendis tempora doloribus omnis
          labore quas ipsam deleniti, accusamus error possimus libero ea
          molestias odit vitae id dolore suscipit, aperiam fugiat rerum laborum,
          illo dignissimos animi voluptatibus. Mollitia molestiae expedita
          doloribus modi, nemo doloremque veritatis sit laudantium accusantium
          dicta eum, ipsa quo, voluptates optio in non sunt sequi rem ullam
          possimus odit fuga vero saepe esse. Iste deserunt tempore ut a iusto
          voluptas rerum itaque reprehenderit illum cumque ex, dolorum tempora
          fugit reiciendis nisi veritatis dolore tenetur optio assumenda vel
          iure id eligendi! Laborum beatae amet dolorum commodi, repellat
          corporis, dolores blanditiis quo illo temporibus perferendis ad
          molestiae nam inventore ex. Ab dignissimos sit omnis velit atque
          adipisci, consequatur veniam earum veritatis ducimus voluptatibus
          cupiditate error, natus minima fugit sed impedit recusandae?
        </p>
      </BottomSheet>
    </>
  );
}
