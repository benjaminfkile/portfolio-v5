type PortfolioItemTypes = {
    id: number
    title: string
    intro: string
    description: string
    file_name: string
    order: number
    url: string | null
    repo: string | null
    media_type: number
    playback_rate: number
    transform_value: string
    icon_sources: string[]
}

export default PortfolioItemTypes