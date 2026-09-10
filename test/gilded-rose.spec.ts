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


    it('should decrease quality by double once sellIn date has passed.', function() {
        const gildedRose = new GildedRose([ new Item('My Item', 0, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(18);
    });


    // Tests for invalid bound values on quality and sellIn

    it('Quality should not be below 0 (never be negative).', function() {
        const gildedRose = new GildedRose([ new Item('My Item', 2, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('Quality should not be above 50, if not Sulfuras.', function() {
        const gildedRose = new GildedRose([ new Item('My Item', 2, 60) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it('sulfuras with quality 80 should not change', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 80, 3) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(80);
    });


    it('aged brie quality should increase', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 4, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(21);
    });

 
    it('backstage pass quality is 0 after sell-in date', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0); 
    });

    it('backstage pass quality increases by 1 with more than 10 days', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 12, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(21); 
    });

    it('backstage pass quality increases by 2 with less than 10 days, but more than 5 days', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 8, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(22); 
    });

    it('backstage pass quality increases by 3 with less than 5 days', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(23); 
    });
});
