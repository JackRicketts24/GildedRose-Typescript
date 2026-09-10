export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {


        for (const currentItem of this.items) {

            // Reduce sell-by date of all items except for Sulfuras.
            if (currentItem.name != 'Sulfuras, Hand of Ragnaros') {
                currentItem.sellIn -= 1;
            }

            if (currentItem.name == 'Aged Brie') {
                currentItem.quality++;
            } else if (currentItem.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (currentItem.sellIn > 10)
                    currentItem.quality += 1;
                else if (currentItem.sellIn > 5)
                    currentItem.quality += 2;
                else if  (currentItem.sellIn > 0)
                    currentItem.quality += 3;
                else
                    currentItem.quality = 0;

            } else if (currentItem.name == 'Conjured Mana Cake') {
                currentItem.quality -= 2;
            } else if (currentItem.name != 'Sulfuras, Hand of Ragnaros') {
                currentItem.quality -= (currentItem.sellIn < 0) ? 2 : 1;
            }
            
            if (currentItem.quality < 0) // Min quality is 0.
                currentItem.quality = 0;

            if (currentItem.quality > 50) // Max quality is 0.
                currentItem.quality = 50;
        }

        return this.items;
    }
}
