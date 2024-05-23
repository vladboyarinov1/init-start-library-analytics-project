import React, { useState } from 'react'

import { SelectedValue } from '@/common/data'
import { useActions } from '@/common/hooks/use-actions.ts'
import { Button } from '@/components/ui/components/button'
import { DashboardButton } from '@/components/ui/components/dashboard-button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { keywordNetworkActions } from '@/components/ui/pages/keyword-network'
import { orgAnalysisSliceActions } from '@/components/ui/pages/org-analysis'
import { Search } from '@/icons'
import { Form, Formik } from 'formik'

import s from './org-analysis.module.scss'

const buttonConfigs = [
  { title: 'По публикациям', value: 'publications' },
  { title: 'По ключевым словам', value: 'keyword' },
]

const years = Array.from({ length: 2024 - 2000 + 1 }, (_, i) => ({ label: (2000 + i).toString() }))

export const OrgAnalysis = () => {
  const { fetchData } = useActions(orgAnalysisSliceActions)
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
              fetchData()
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
                    setFieldValue={setFieldValue} // Pass setFieldValue here
                    title={'Тип'}
                    variant={'primary'}
                  />
                  <Input
                    name={'iso'}
                    onChange={handleChange}
                    placeholder={'Код страны'}
                    value={values.iso}
                  />
                  <div className={s.selects}>
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
                  </div>
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
    </div>
  )
}
