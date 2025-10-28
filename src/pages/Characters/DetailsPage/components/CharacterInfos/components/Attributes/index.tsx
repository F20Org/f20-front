import { RadarChart } from '@mui/x-charts'

import { AttributesContainer } from './styles'

export const Attributes = () => {
  return (
    <AttributesContainer>
      <h2>Atributos</h2>
      <div>
        <RadarChart
          height={320}
          width={320}
          hideLegend={true}
          series={[
            {
              label: 'Lisa',
              data: [44, 64, 86, 66, 85, 65],
              fillArea: true,
              color: '#C94040',
            },
          ]}
          radar={{
            max: 100,
            metrics: ['1', '2', '3', '4', '5', '6'],
          }}
        />
      </div>
    </AttributesContainer>
  )
}
