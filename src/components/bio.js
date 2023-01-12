import React from "react"

const Bio = () => {
	return(
    <main className="bio_container">
      <p className="bio_para">This is a collection of recipes I like and/or frequently use. I make websites and wanted a quick and easy way to store the recipes I like and regularly use. I tried different methods but didn’t find one I like so I made my own. </p>
      <p className="bio_para">Found inspiration from the following websites- <a href="https://motherfuckingwebsite.com/" target="_blank" rel="noreferrer" className="bio_link"> original</a>, <a href="http://bettermotherfuckingwebsite.com/" target="_blank" rel="noreferrer" className="bio_link"> better</a>, <a href="https://evenbettermotherfucking.website/" target="_blank" rel="noreferrer" className="bio_link">even better</a>, <a href="https://thebestmotherfucking.website/" target="_blank" rel="noreferrer" className="bio_link">best</a>, and <a href="https://bestmotherfucking.website/"target="_blank" rel="noreferrer" className="bio_link">the best</a>. Kept the design simple and clean, to find the information easily, the site light with design supporting accesibilty and functionality. Began as a school project I reworked with gatsby, using contenful as a CMS to add recipes.</p>
      <p className="bio_para">To see my other <a href="https://clairemakeswebsites.github.io./" target="_blank" rel="noreferrer" className="bio_link">web design</a> work, or other things <a href="https://www.instagram.com/clairecreatesthe/" target="_blank" rel="noreferrer" className="bio_link">I make</a></p>
    </main>
		)
}

export default Bio