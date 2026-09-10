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

            if (currentItem.name != 'Aged Brie' && currentItem.name != 'Backstage passes to a TAFKAL80ETC concert' && currentItem.name != 'Sulfuras, Hand of Ragnaros') {
                currentItem.quality--;

            } else {
                currentItem.quality++;
                if (currentItem.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (currentItem.sellIn < 11) {
                        currentItem.quality++;
                    }
                    if (currentItem.sellIn < 6) {
                        currentItem.quality++;
                    }
                }
            }
            
            // Reduce sell-by date of all items except for Sulfuras.
            if (currentItem.name != 'Sulfuras, Hand of Ragnaros') {
                currentItem.sellIn -= 1;
            }

            if (currentItem.sellIn < 0) {
                if (currentItem.name != 'Aged Brie') {
                    if (currentItem.name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (currentItem.name != 'Sulfuras, Hand of Ragnaros') {
                            currentItem.quality--;
                        }
                    } else {
                        currentItem.quality = 0
                    }
                } else {
                    currentItem.quality++;
                }
            }
            
            if (currentItem.quality < 0) // Min quality is 0.
                currentItem.quality = 0;

            if (currentItem.quality > 50) // Max quality is 0.
                currentItem.quality = 50;
        }

        return this.items;
    }
}
