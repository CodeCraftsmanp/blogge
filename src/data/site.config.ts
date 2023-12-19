interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Brahim_Chatri', // Site author
	title: 'Arabic-Science', // Site title.
	description: "	مرحبًا في مدونتنا'Arabic-Science'! اكتشف أحدث الاكتشافات والأبحاث والتكنولوجيا في عالم العلوم. انضم إلينا في هذه الرحلة المثيرة حيث نشارك المعلومات بشكل مشوق باللغة العربية. استمتع بتجارب العلوم وتطورات التكنولوجيا وكن جزءًا من مجتمع يهتم بالعلوم والاكتشافات. تواصل معنا لاستكشاف عالم المعرفة والابتكارات!",// Description to display in the meta tags
	lang: 'ar',
	ogLocale: 'ar',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
