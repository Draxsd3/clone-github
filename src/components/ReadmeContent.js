import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SectionCard from './SectionCard';
import TechBadge from './TechBadge';
import {
  profile,
  sobreMim,
  especialidade,
  stackBackend,
  stackFrontend,
  stackDevops,
  automacaoItems,
  atuacao,
  projects,
  activity,
} from '../data/profileData';

function BulletItem({ text }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bullet}>▸</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

function StackRow({ items }) {
  return (
    <View style={styles.techRow}>
      {items.map((item, i) => (
        <TechBadge key={i} {...item} />
      ))}
    </View>
  );
}

function LanguageBar({ name, percent, color }) {
  return (
    <View style={styles.langRow}>
      <View style={[styles.langDot, { backgroundColor: color }]} />
      <Text style={styles.langName}>{name}</Text>
      <Text style={styles.langPercent}>{percent}%</Text>
    </View>
  );
}

export default function ReadmeContent() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerCard}>
        <Text style={styles.profileName}>{profile.name}</Text>
        <Text style={styles.profileTitle}>{profile.title}</Text>
        <Text style={styles.profileSubtitle}>{profile.subtitle}</Text>

        <View style={styles.linkRow}>
          {profile.links.map((link, i) => (
            <View key={i} style={styles.linkItem}>
              <Ionicons name={link.icon} size={14} color="#58a6ff" />
              <Text style={styles.linkLabel}>{link.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Sobre Mim */}
      <SectionCard emoji="🧠" title="Sobre Mim">
        <View style={styles.cardContent}>
          <Text style={styles.bodyText}>{sobreMim[0]}</Text>
          <View style={styles.spacer} />
          {sobreMim.slice(1).map((item, i) => (
            <BulletItem key={i} text={item} />
          ))}
        </View>
      </SectionCard>

      {/* Especialidade */}
      <SectionCard emoji="⚡" title="Especialidade">
        <View style={styles.cardContent}>
          <Text style={styles.tagPill}>{especialidade[0]}</Text>
          <View style={styles.spacer} />
          <Text style={styles.bodyText}>{especialidade[1]}</Text>
        </View>
      </SectionCard>

      {/* Stack Tecnológica */}
      <SectionCard emoji="🛠️" title="Stack Tecnológica">
        <View style={styles.cardContent}>
          <Text style={styles.stackLabel}>Linguagens • Backend</Text>
          <StackRow items={stackBackend} />

          <Text style={[styles.stackLabel, styles.stackLabelTop]}>Frontend & Interface</Text>
          <StackRow items={stackFrontend} />

          <Text style={[styles.stackLabel, styles.stackLabelTop]}>DevOps & Infraestrutura</Text>
          <StackRow items={stackDevops} />
        </View>
      </SectionCard>

      {/* Automação & IA */}
      <SectionCard emoji="🤖" title="Automação & Inteligência Artificial">
        <View style={styles.cardContent}>
          <Text style={styles.bodyText}>
            Automação de processos, integrações inteligentes e IA aplicada a operações reais.
          </Text>
          <View style={styles.spacer} />
          <View style={styles.pillsRow}>
            {['n8n', 'Claude', 'APIs', 'Docker', 'Google Cloud'].map((item, i) => (
              <View key={i} style={styles.pill}>
                <Text style={styles.pillText}>{item}</Text>
              </View>
            ))}
          </View>
          <View style={styles.spacer} />
          <Text style={styles.bodyTextSmall}>
            Workflows automatizados, integração entre serviços, agentes com IA e orquestração de processos orientados à operação.
          </Text>
          <View style={styles.pillsRow}>
            {['n8n Flows', 'MakeFlow', 'API / Infra', 'Claude', 'Database', 'Airflow'].map((item, i) => (
              <View key={i} style={[styles.pill, styles.pillSecondary]}>
                <Text style={styles.pillText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </SectionCard>

      {/* Atuação */}
      <SectionCard emoji="🎯" title="Atuação">
        <View style={styles.cardContent}>
          {atuacao.map((item, i) => (
            <BulletItem key={i} text={item} />
          ))}
        </View>
      </SectionCard>

      {/* Projetos em Destaque */}
      <SectionCard emoji="🚀" title="Projetos em Destaque">
        <View style={styles.cardContent}>
          {projects.map((proj, i) => (
            <View key={i} style={styles.projectRow}>
              <View style={[styles.projectDot, { backgroundColor: proj.color }]} />
              <Text style={styles.projectName}>{proj.name}</Text>
              <View style={styles.projectIcons}>
                {proj.icons.map((icon, j) => (
                  <Ionicons key={j} name={icon} size={14} color="#8b949e" style={styles.projIcon} />
                ))}
              </View>
            </View>
          ))}
        </View>
      </SectionCard>

      {/* Atividade */}
      <SectionCard emoji="📊" title="Atividade">
        <View style={styles.cardContent}>
          {/* Stats */}
          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{activity.totalContributions.toLocaleString()}</Text>
              <Text style={styles.statLabel}>Total Contributions</Text>
            </View>
            <View style={[styles.statBox, styles.statBoxHighlight]}>
              <Text style={styles.statNumberHighlight}>{activity.currentStreak}</Text>
              <Text style={styles.statLabel}>Current Streak</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{activity.longestStreak}</Text>
              <Text style={styles.statLabel}>Longest Streak</Text>
            </View>
          </View>

          <View style={styles.spacer} />

          {/* Language bar */}
          <View style={styles.langBarContainer}>
            {activity.languages.map((lang, i) => (
              <View
                key={i}
                style={[
                  styles.langBarSegment,
                  {
                    flex: lang.percent,
                    backgroundColor: lang.color,
                    borderTopLeftRadius: i === 0 ? 4 : 0,
                    borderBottomLeftRadius: i === 0 ? 4 : 0,
                    borderTopRightRadius: i === activity.languages.length - 1 ? 4 : 0,
                    borderBottomRightRadius: i === activity.languages.length - 1 ? 4 : 0,
                  },
                ]}
              />
            ))}
          </View>

          <View style={styles.langList}>
            {activity.languages.map((lang, i) => (
              <LanguageBar key={i} {...lang} />
            ))}
          </View>
        </View>
      </SectionCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerCard: {
    backgroundColor: '#161b22',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#30363d',
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  profileName: {
    color: '#e6edf3',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  profileTitle: {
    color: '#8b949e',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 6,
  },
  profileSubtitle: {
    color: '#c9d1d9',
    fontSize: 13,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 12,
  },
  linkRow: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  linkLabel: {
    color: '#58a6ff',
    fontSize: 12,
  },
  cardContent: {
    padding: 16,
  },
  bodyText: {
    color: '#c9d1d9',
    fontSize: 13,
    lineHeight: 20,
  },
  bodyTextSmall: {
    color: '#8b949e',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 8,
  },
  spacer: {
    height: 10,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
    gap: 8,
  },
  bullet: {
    color: '#58a6ff',
    fontSize: 12,
    marginTop: 2,
  },
  bulletText: {
    color: '#c9d1d9',
    fontSize: 13,
    flex: 1,
    lineHeight: 19,
  },
  tagPill: {
    color: '#58a6ff',
    fontSize: 13,
    fontWeight: '600',
    backgroundColor: '#1f3a5c',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  stackLabel: {
    color: '#8b949e',
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  stackLabelTop: {
    marginTop: 12,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  pill: {
    backgroundColor: '#1f3a5c',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  pillSecondary: {
    backgroundColor: '#1a2d1a',
  },
  pillText: {
    color: '#58a6ff',
    fontSize: 11,
    fontWeight: '600',
  },
  projectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  projectDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  projectName: {
    color: '#c9d1d9',
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  projectIcons: {
    flexDirection: 'row',
    gap: 6,
  },
  projIcon: {
    marginLeft: 2,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#0d1117',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#30363d',
    padding: 10,
    alignItems: 'center',
  },
  statBoxHighlight: {
    borderColor: '#1f6feb',
    backgroundColor: '#0c1f3a',
  },
  statNumber: {
    color: '#e6edf3',
    fontSize: 18,
    fontWeight: '700',
  },
  statNumberHighlight: {
    color: '#58a6ff',
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    color: '#8b949e',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 2,
  },
  langBarContainer: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  langBarSegment: {
    height: 8,
  },
  langList: {
    gap: 4,
  },
  langRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  langDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  langName: {
    color: '#c9d1d9',
    fontSize: 12,
    flex: 1,
  },
  langPercent: {
    color: '#8b949e',
    fontSize: 12,
  },
});
