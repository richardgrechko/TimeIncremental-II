var game = {
	seconds: new Decimal(0),
	tpsA: new Decimal(10).pow(-33),
	time: "",
	timePerSecond: "",
	realityQuarks: new Decimal(0),
	prestigePoints: new Decimal(0),
	ascensionProducts: new Decimal(0),
	timeUpgrades: [
		new timeUpgrade("TU#1: Starter", new Decimal(10).pow(-32), 1.1, 1.2, 1.1),
		new timeUpgrade("TU#2: Hastener", new Decimal(10).pow(-30), 1.2, 1.5, 1.25),
		new timeUpgrade("TU#3: Quickener", new Decimal(10).pow(-27), 1.35, 1.75, 1.4),
		new timeUpgrade("TU#4: Strengthener", new Decimal(10).pow(-23), 1.6, 2.1, 1.75),
		new timeUpgrade("TU#5: Warper", new Decimal(10).pow(-18), 1.95, 2.4, 2.1),
		new timeUpgrade("TU#6: Traveler", new Decimal(10).pow(-12), 2.3, 2.85, 2.6),
	]
}
