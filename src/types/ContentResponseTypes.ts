import PortfolioItemTypes from "./PortfolioItemTypes"
import SkillItemTypes from "./SkillItemTypes"
import TimelineItemTypes from "./TimelineItemTypes"

type ContentResponseTypes = {
    content: {
        about: string
        portfolioItems: PortfolioItemTypes[]
        skillItems: SkillItemTypes[]
        timelineItems: TimelineItemTypes[]
    }
    error: boolean
    errorMsg: any
}

export default ContentResponseTypes