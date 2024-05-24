import React, { useState } from 'react'

import { SelectedValue } from '@/common/data'
import { useActions } from '@/common/hooks/use-actions.ts'
import { useAppSelector } from '@/common/hooks/use-app-selector.ts'
import { Button } from '@/components/ui/components/button'
import { ChartSection } from '@/components/ui/components/chart-section'
import { DashboardButton } from '@/components/ui/components/dashboard-button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { BarChar } from '@/components/ui/diagrams/bar-chart'
import { PieChart } from '@/components/ui/diagrams/pie-chart'
import { RadialBar } from '@/components/ui/diagrams/radial-bar'
import { editionsPubKeyAnalysisSelectors } from '@/components/ui/pages/editions-pub-key-analysis-api/model/editions-pub-key-analysis-selectors.ts'
import { keywordNetworkActions } from '@/components/ui/pages/keyword-network'
import { orgAnalysisSliceActions } from '@/components/ui/pages/org-analysis'
import { orgAnalysisSelectors } from '@/components/ui/pages/org-analysis/model/org-analysis-selectors.ts'
import { Search } from '@/icons'
import { Form, Formik } from 'formik'
import { Simulate } from 'react-dom/test-utils'

import s from './org-analysis.module.scss'

import ended = Simulate.ended

const buttonConfigs = [
  { title: 'По публикациям', value: 'publications' },
  { title: 'По ключевым словам', value: 'keyword' },
]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 2012 + 1 }, (_, i) => ({
  label: (currentYear - i).toString(),
}))

export const OrgAnalysis = () => {
  const { fetchData } = useActions(orgAnalysisSliceActions)
  const data = useAppSelector(orgAnalysisSelectors)
  const [type, setType] = useState<SelectedValue>('publications')

  const changeSelectedValue = (value: SelectedValue) => {
    setType(value)
  }

  return (
    <div>
      <div className={s.dashboard}>
        <div className={s.title}>
          <h2>Издания: анализ публикаций и ключевых слов</h2>
        </div>
        <div className={s.menuSwitchItems}>
          {buttonConfigs.map(config => (
            <DashboardButton
              currentType={type}
              key={config.value}
              onChange={changeSelectedValue}
              title={config.title}
              value={config.value as SelectedValue}
            />
          ))}
        </div>
        <div>
          <Formik
            initialValues={{ endYear: '', iso: '', startYear: '', type: '' }}
            onSubmit={values => {
              alert(JSON.stringify(values, null, 2))
              fetchData({
                endYear: +values.endYear,
                iso: values.iso,
                startYear: +values.startYear,
                type: values.type,
              })
            }}
          >
            {({ handleChange, handleSubmit, setFieldValue, values }) => (
              <Form>
                <div className={s.form}>
                  <SelectButton
                    activeValueName={values.type}
                    itemsData={[{ items: [{ label: 'government' }, { label: 'education' }] }]}
                    name={'type'}
                    onChange={e => setFieldValue('type', e)}
                    setFieldValue={setFieldValue}
                    title={'Тип'}
                    variant={'primary'}
                  />
                  <Input
                    name={'iso'}
                    onChange={handleChange}
                    placeholder={'Код страны'}
                    value={values.iso}
                  />
                  <SelectButton
                    activeValueName={values.startYear}
                    itemsData={[{ items: years }]}
                    name={'startYear'}
                    onChange={e => setFieldValue('startYear', e)}
                    setFieldValue={setFieldValue}
                    title={'Год начала'}
                    variant={'primary'}
                  />
                  <SelectButton
                    activeValueName={values.endYear}
                    itemsData={[{ items: years }]}
                    name={'endYear'}
                    onChange={e => setFieldValue('endYear', e)}
                    setFieldValue={setFieldValue}
                    title={'Конечный год'}
                    variant={'primary'}
                  />
                  <div className={s.buttons}>
                    <Button onClick={handleSubmit} type={'submit'}>
                      Поиск <Search />
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div>
        {type === 'publications' && data.citationsData.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'white', borderRadius: 12, padding: 10, width: 560 }}>
              <h2>Количество публикаций</h2>
              <RadialBar data={data.publicationsData} />
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: 12, padding: 10, width: 560 }}>
              <h2>Количество цитирований</h2>
              <RadialBar data={data.citationsData} />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
