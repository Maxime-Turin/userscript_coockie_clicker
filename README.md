# userscript_coockie_clicker
Userscript to automate actions on the famous idle game Coockie Clicker.

1982 - 2011 => Les variables

2448 => Grandma names

Game.Reset() => Reset

Boule de sucre 4400

4680 Cookies economics

4799 => trophée si autoclick ^^

1946 => CPS + golden cookies ?

5208 => golden cookies again ( popFunc ln 5415)

7659 => Buildings

Game.ObjectsById[id]  ARRAY
    bulkPrice -> Prix en cour
    storedCps -> cps d'1
    storedTotalCps -> cps totaux (storedCps * amount)
    locked -> 0 = unlocked ; 1 = locked
    amount -> nb possédé
    buyFunction
        ex avec Cursor : Game.ObjectsById[0].buy(1)

Game.Objects  OBJECT
    buyFunction
        ex avec Cursor :  Game.Objects.Cursor.buy(1)

ln 7709 => 69 420 loool

(bulkPrice / storedTotalCps + storedCps) => + c'est petit - ça rapporte gros

Game.ObjectsById.forEach(
      (element) => (element.amount = 1000000)
    );
console.log(ratioCpsPrice)

à voir en fonction du temps

Game.cookiesPs => cps totaux  