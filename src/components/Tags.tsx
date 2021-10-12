import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, PolygonIcon } from 'polygon-moonwalkerswap-uikit'

const CoreTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<VerifiedIcon />} {...props}>
    Core
  </Tag>
)

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />} {...props}>
    Community
  </Tag>
)

const PolygonTag = (props) => (
  <Tag variant="polygon" outline startIcon={<PolygonIcon />} {...props}>
    Polygon
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
)

export { CoreTag, CommunityTag, PolygonTag, DualTag }
