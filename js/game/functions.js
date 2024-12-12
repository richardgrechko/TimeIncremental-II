const functions = {
	formatTime: function(seconds)
	{
		let k;
		let abbreviations = ["mes","qs","rs","ys","zs","as","fs","ps","ns","μs","ms","s","min","hr","d","mo","y","mil","meg","gig","ter","pet","exa","zet","yot","ron","que"];
		else if(seconds.gte(1))
		{
			let g = new Decimal(game.seconds).log10().div(3)
			let m = new Decimal(game.seconds.div(31557600)).log10().div(3)
			k = game.seconds + abbreviations[11]
			if(seconds.gte(3.15576e40))
			{
				k = game.seconds.div(31557600).toFixed(3) + abbreviations[16]
			}
			else if(seconds.gte(3.15576e10))
			{
				k = game.seconds.pow(m.sub(m.floor())).toFixed(3) + abbreviations[m.add(5).floor()]
			}
			else if(seconds.gte(31557600))
			{
				k = game.seconds.div(31557600).toFixed(3) + abbreviations[16]
			}
			else if(seconds.gte(2629800))
			{
				k = game.seconds.div(2629800).toFixed(3) + abbreviations[15]
			}
			else if(seconds.gte(86400))
			{
				k = game.seconds.div(86400).toFixed(3) + abbreviations[14]
			}
			else if(seconds.gte(3600))
			{
				k = game.seconds.div(3600).toFixed(3) + abbreviations[13]
			}
			else if(seconds.gte(60))
			{
				k = game.seconds.div(60).toFixed(3) + abbreviations[12]
			}
		}
		if(seconds.gte(new Decimal(10).pow(-33)))
		{
			let g = new Decimal(game.seconds).log10().div(3)
			k = game.seconds.pow(g.sub(g.floor())).toFixed(3) + abbreviations[g.sub(11).floor()]
		}
		else if(seconds.eq(0))
		{
			k = "0s"
		}
		else
		{
			k = "NaNy"
		}
		return k;
	}
}
