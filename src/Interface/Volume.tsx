interface Volume {
	kind: string,
	id: string,
	etag: string,
	selfLink: string,
	volumeInfo: {
		title: string,
		subtitle: string,
		authors: [string],
		publisher: string,
		publishedDate: string,
		description: string,
		industryIdentifiers: [
			{
				type: string,
				identifier: string
			}
		],
		pageCount: number,
		dimension:
		{
			height: string,
			width: string
		}
	}
}

export default Volume