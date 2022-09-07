let absolute = "absolute ";
let centerX = "left-1/2 -translate-x-1/2 ";
let centerY = "top-1/2 -translate-y-1/2 ";
let center = absolute + centerX + centerY;
let centerFitContent = center + "h-fit w-fit ";
let centerHFull = absolute + "h-full top-1/2 -translate-y-1/2 " + centerX;
let leftHFull = absolute + "left-0 top-0 h-full w-1/2 md:w-1/5 ";
let content = absolute + "w-screen h-9/10 top-1/10 ";
let header = absolute + "h-1/10 w-screen ";
let topBorder = "border-t border-black ";
let bottomBorder = "border-b border-black ";
let rightBorder = "border-r border-black ";
let text = "text-center subpixel-antialiased font-mono text-black ";
let smallText = text + "text-xs md:text-base ";
let smallTitle = text + "font-bold text-sm md:text-lg ";
let title = text + "font-bold text-xl md:text-3xl ";
let contentText = text + "font-bold text-3xl md:text-5xl ";
let link = text + "hover:underline cursor-pointer tracking-tighter ";
let mediumLink = link + "text-base md:text-xl font-bold ";
let orangeLink = mediumLink + "hover:text-orange-400 ";


export let background = content + "-z-50";
export let backgroundImage = centerHFull + "object-contain opacity-10";

export let footer = "absolute h-3/20 inset-x-0 bottom-0 py-3";
export let footerTextLocation = centerFitContent;
export let footerTitle = smallTitle;
export let footerText = smallText;

export let home = content;
export let homeImage = centerHFull + "object-contain";

export let homeHeader = header;
export let homeHeaderTextLocation = centerFitContent + "columns-2";
export let homeHeaderText = orangeLink;

export let mainHeader = header + bottomBorder + "bg-orange-400";
export let mainHeaderMenuIcon = absolute + centerY + "left-0 h-3/5 cursor-pointer";
export let mainHeaderTextPosition = centerFitContent;
export let mainHeaderText = title;

export let portfolio = content + "flex flex-col flex-nowrap";
export let portfolioImageGrid = "columns-1 md:columns-2 lg:columns-3 overflow-y-auto";
export let portfolioImageFrame = "relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20";
export let portfolioImage = "w-full rounded-md";

export let quemSomos = content;
export let quemSomosTextPosition = centerFitContent;
export let quemSomosText = contentText;

export let sidebar = leftHFull + rightBorder + "bg-orange-400";
export let sidebarImage = "static w-full top-0 left-0 object-contain";
export let sidebarText = mediumLink;
export let sidebarHomeText = sidebarText + topBorder + "pt-5";
