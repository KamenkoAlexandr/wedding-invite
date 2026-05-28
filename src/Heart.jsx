import Heart from './assets/Heart.svg'

export const HeartIcon = ({ width = '20px', height = '20px' }) => {
  return <img src={Heart} alt="Heart" style={{ width: width, height: height }} />
}