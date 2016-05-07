"use strict";
var ArmoryData = (function () {
    function ArmoryData() {
    }
    return ArmoryData;
}());
exports.ArmoryData = ArmoryData;
var Armory = (function () {
    function Armory(ArmoryData) {
        this.ArmoryData = ArmoryData;
        this.Head = ArmoryData.Head;
        this.Chest = ArmoryData.Chest;
        this.Arms = ArmoryData.Arms;
        this.Legs = ArmoryData.Legs;
        this.StartingCharacter = ArmoryData.StartingCharacter;
        this.GameProgressConditions = ArmoryData.GameProgressConditions;
    }
    Armory.prototype.CountHeadArmor = function () {
        var result = 0;
        for (var i = 0; i < this.Head.length; i++) {
            if (this.Head[i].Enabled)
                result++;
        }
        return result;
    };
    return Armory;
}());
exports.Armory = Armory;
var ArmorPiece = (function () {
    function ArmorPiece() {
    }
    return ArmorPiece;
}());
exports.ArmorPiece = ArmorPiece;
var ArmorCombination = (function () {
    function ArmorCombination(Head, Chest, Arms, Legs) {
        this.Head = Head;
        this.Chest = Chest;
        this.Arms = Arms;
        this.Legs = Legs;
        this.Weight = Head.Weight + Chest.Weight + Arms.Weight + Legs.Weight;
        this.Physical = 1 - (1 - Head.Physical / 100) * (1 - Chest.Physical / 100) * (1 - Arms.Physical / 100) * (1 - Legs.Physical / 100);
        this.Strike = 1 - (1 - Head.Strike / 100) * (1 - Chest.Strike / 100) * (1 - Arms.Strike / 100) * (1 - Legs.Strike / 100);
        this.Slash = 1 - (1 - Head.Slash / 100) * (1 - Chest.Slash / 100) * (1 - Arms.Slash / 100) * (1 - Legs.Slash / 100);
        this.Thrust = 1 - (1 - Head.Thrust / 100) * (1 - Chest.Thrust / 100) * (1 - Arms.Thrust / 100) * (1 - Legs.Thrust / 100);
        this.Magic = 1 - (1 - Head.Magic / 100) * (1 - Chest.Magic / 100) * (1 - Arms.Magic / 100) * (1 - Legs.Magic / 100);
        this.Fire = 1 - (1 - Head.Fire / 100) * (1 - Chest.Fire / 100) * (1 - Arms.Fire / 100) * (1 - Legs.Fire / 100);
        this.Lightning = 1 - (1 - Head.Lightning / 100) * (1 - Chest.Lightning / 100) * (1 - Arms.Lightning / 100) * (1 - Legs.Lightning / 100);
        this.Dark = 1 - (1 - Head.Dark / 100) * (1 - Chest.Dark / 100) * (1 - Arms.Dark / 100) * (1 - Legs.Dark / 100);
        this.Bleed = Head.Bleed + Chest.Bleed + Arms.Bleed + Legs.Bleed;
        this.Poison = Head.Poison + Chest.Poison + Arms.Poison + Legs.Poison;
        this.Frost = Head.Frost + Chest.Frost + Arms.Frost + Legs.Frost;
        this.Curse = Head.Curse + Chest.Curse + Arms.Curse + Legs.Curse;
        this.Poise = Head.Poise + Chest.Poise + Arms.Poise + Legs.Poise;
    }
    return ArmorCombination;
}());
exports.ArmorCombination = ArmorCombination;
var ArmorCombinationFactory = (function () {
    function ArmorCombinationFactory(MetricWeights) {
        this.MetricWeights = MetricWeights;
    }
    ArmorCombinationFactory.prototype.Combine = function (Head, Chest, Arms, Legs) {
        var result = new ArmorCombination(Head, Chest, Arms, Legs);
        if (this.MetricWeights != null) {
            result.Metric =
                this.MetricWeights.Physical * result.Physical +
                    this.MetricWeights.Strike * result.Strike +
                    this.MetricWeights.Slash * result.Slash +
                    this.MetricWeights.Thrust * result.Thrust +
                    this.MetricWeights.Magic * result.Magic +
                    this.MetricWeights.Fire * result.Fire +
                    this.MetricWeights.Lightning * result.Lightning +
                    this.MetricWeights.Dark * result.Dark +
                    this.MetricWeights.Bleed * result.Bleed +
                    this.MetricWeights.Poison * result.Poison +
                    this.MetricWeights.Frost * result.Frost +
                    this.MetricWeights.Curse * result.Curse +
                    this.MetricWeights.Poise * result.Poise;
        }
        else {
            result.Metric = null;
        }
        return result;
    };
    return ArmorCombinationFactory;
}());
exports.ArmorCombinationFactory = ArmorCombinationFactory;
var OptimizationParameters = (function () {
    function OptimizationParameters() {
        this.Physical = 0;
        this.Strike = 0;
        this.Slash = 0;
        this.Thrust = 0;
        this.Magic = 0;
        this.Fire = 0;
        this.Lightning = 0;
        this.Dark = 0;
        this.Bleed = 0;
        this.Poison = 0;
        this.Frost = 0;
        this.Curse = 0;
        this.Poise = 0;
    }
    return OptimizationParameters;
}());
exports.OptimizationParameters = OptimizationParameters;
var GameProgressArmorGroup = (function () {
    function GameProgressArmorGroup() {
    }
    return GameProgressArmorGroup;
}());
exports.GameProgressArmorGroup = GameProgressArmorGroup;
//# sourceMappingURL=armory.js.map