import { LinkedList } from "./linked-list.mjs";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("hourse");

/* console.log(list.find("turtle")); */

/* let value = list.pop(); */

console.log(list.toString()); // ( hourse ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
