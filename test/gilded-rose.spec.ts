import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should decrease quality by 1 for generic items', function() {
        const gildedRose = new GildedRose([ new Item('My Item', 3, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(19);
    });

    it('should decrease sell-by date by 1 for generic items', function() {
        const gildedRose = new GildedRose([ new Item('My Item', 3, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(2);
    });

    // it('should decrease sell-by date by 1 for generic items', function() {
    //     const gildedRose = new GildedRose([ new Item('My Item', 20, 3) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].sellIn).to.equal(2);
    // });


});
